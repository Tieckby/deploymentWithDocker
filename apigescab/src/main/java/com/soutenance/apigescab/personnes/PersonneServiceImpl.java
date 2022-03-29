package com.soutenance.apigescab.personnes;

import com.soutenance.apigescab.EmailSenderService;
import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.personnes.medecin.MedecinRepository;
import com.soutenance.apigescab.personnes.role.Role;
import com.soutenance.apigescab.personnes.role.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service @RequiredArgsConstructor
public class PersonneServiceImpl implements PersonneService, UserDetailsService {
    @Autowired
    PersonneRepository personneRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    MedecinRepository medecinRepository;

    private final PasswordEncoder passwordEncoder;

    @Value("${file.upload-dir}")
    String FILE_DIR;

    @Autowired
    EmailSenderService emailSenderService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Personne personne = personneRepository.findByUsername(username);

        if(personne == null || personne.getEtat() == Etat.DESACTIVER){
            throw new UsernameNotFoundException("Personne non trouvée dans la base !");
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        personne.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        });

        return new org.springframework.security.core.userdetails.User(personne.getUsername(), personne.getPassword(), authorities);
    }

    @Override
    public void saveRole(Role role) {
        roleRepository.save(role);
    }

    @Transactional
    @Override
    public void addRoleToPerson(String username, String roleName) {
        Personne personne = personneRepository.findByUsername(username);
        Role role = roleRepository.findByName(roleName);
        personne.getRoles().add(role);
    }

    @Transactional
    @Override
    public String ajouter_personne(Personne personne) {
        personne.setPassword(passwordEncoder.encode(personne.getPassword()));
        personne.setImageProfile("src/main/resources/assets/images/user.png");

        if(personne.getProfile() == Profile.MEDECIN)
        {
            personne.setEtat(Etat.DESACTIVER);
            emailSenderService._sendEmail("odcgescabinet@gmail.com", "Inscription du médecin "+personne.getNom()+" "+personne.getPrenom()+", veuillez le confirmer !", "Inscription d'un Médecin");
        }

        personneRepository.save(personne);
        return "Personne ajoutée avec succès !";
    }

    @Transactional
    @Override
    public void modifier_personne(Long id, Personne personne) {
        Personne existPerson = personneRepository.findById(id).orElseThrow();
        existPerson.setNom(personne.getNom());
        existPerson.setPrenom(personne.getPrenom());
        existPerson.setAdresse(personne.getAdresse());
        existPerson.setTelephone(personne.getTelephone());
        existPerson.setEmail(personne.getEmail());
        existPerson.setGenre(personne.getGenre());
        existPerson.setUsername(personne.getUsername());
    }

    @Transactional
    @Override
    public void updateProfileImg(String username, MultipartFile imgFile) throws IOException {
        Personne existsPerson = personneRepository.findByUsername(username);

        if(existsPerson == null)
        {
            throw new UsernameNotFoundException("User not found !");
        }

        File file = new File(FILE_DIR+imgFile.getOriginalFilename());
        if(!file.createNewFile()){
            throw new IOException("Image not upload !");
        }

        if(!existsPerson.getImageProfile().equals("src/main/resources/assets/images/user.png"))
        {
            File existFile = new File(existsPerson.getImageProfile());
            if(existFile.delete())
            {
                System.out.println("File "+existsPerson.getImageProfile()+" is deleted !");
            }
        }

        FileOutputStream fileOutputStream = new FileOutputStream(file);
        fileOutputStream.write(imgFile.getBytes());
        fileOutputStream.close();

        existsPerson.setImageProfile(FILE_DIR+imgFile.getOriginalFilename());
    }

    @Override
    public byte[] getProfileImg(String username) throws IOException {
        Personne personne = personneRepository.findByUsername(username);
        File file = new File(personne.getImageProfile());
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }

    @Transactional
    @Override
    public String suprimer_personne(Long id) {
        Personne existPerson = personneRepository.findById(id).orElseThrow();
        existPerson.setIsDelete(true);  //Set isDelete to true

        return "Personne supprimé avec succès !";
    }

    @Transactional
    @Override
    public String restorePersonne(Long id) {
        Personne existPerson = personneRepository.findById(id).orElseThrow();
        existPerson.setIsDelete(false);

        return "Personne restaurée avec succès !";
    }

    @Override
    public List<Personne> listePersonne(){
        return personneRepository.findAll();
    }

    @Override
    public Personne getPersonneById(Long id) {
        return personneRepository.findById(id).orElseThrow();
    }

    @Override
    public Personne getPersonneByUsername(String username) {
        return personneRepository.findByUsername(username);
    }

    @Override
    public List<Personne> getPersonneByProfile(Profile profile) {
        return personneRepository.findByProfileAndIsDelete(profile, false);
    }

    @Transactional
    @Override
    public String changePassword(String username, String newPassword) throws UsernameNotFoundException{
        Personne personneByUsername = personneRepository.findByUsername(username);

        if(personneByUsername == null){
            throw new UsernameNotFoundException("Ce nom d'utilisateur n'existe pas !");
        }

        personneByUsername.setPassword(passwordEncoder.encode(newPassword));
        return "Mot de passe modifé avec succès";
    }

    @Override
    public List<Medecin> getMedecinByCabinetMedicale(CabinetMedicale cabinetMedicale) {
        return medecinRepository.findByCabinetMedicale(cabinetMedicale);
    }

    @Override
    public String sendEmailToUser(String email) throws MalformedURLException {
        Personne personne = personneRepository.findByEmail(email);

        if(personne == null)
        {
            return null;
        }

        //URL url = new URL("http://localhost:4200/#/authentication/forgot-password");
        URL url = new URL("https://tieckby.github.io/SoutenanceODKFront/#/authentication/forgot-password");
        String subject = "Réinitialisez votre mot de passe";
        String emailBody = "Bonjour! vous avez oublié votre mot de passe? Cliquez sur ce lien pour le modifier : "+url;
        emailSenderService._sendEmail(email, emailBody, subject);
        return "Email sent...";
    }

    @Transactional
    @Override
    public String setPersonStatut(Long idPerson, Etat etat) {
        String emailBody = "";
        Personne personne = personneRepository.findById(idPerson).orElseThrow();
        personne.setEtat(etat);

        String subject = "Statut du compte";

        if(etat == Etat.ACTIVER)
        {
            emailBody = "Bonjour! "+personne.getPrenom()+" "+personne.getNom()+", votre compte est maintenant activé.\nVotre username est "+personne.getUsername();
        }
        else
        {
            emailBody = "Bonjour! "+personne.getPrenom()+" "+personne.getNom()+", votre compte vient d'être désactiver. Vous ne pourrez plus vous connecter à votre compte.";
        }

        emailSenderService._sendEmail(personne.getEmail(), emailBody, subject);
        return "L'état modifié avec succès !";
    }

    @Override
    public String getPersonEmail(String email) {
        return personneRepository.getPersonEmail(email);
    }

    @Override
    public String getPersonUsername(String username) {
        return personneRepository.getPersonUsername(username);
    }

    @Override
    public Integer getPersonTelephone(Integer telephone) {
        return personneRepository.getPersonTelephone(telephone);
    }
}
