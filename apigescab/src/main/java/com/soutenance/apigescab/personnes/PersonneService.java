package com.soutenance.apigescab.personnes;
import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.personnes.role.Role;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

@Service
public interface PersonneService
{
    String ajouter_personne(Personne personne);
    void modifier_personne(Long id, Personne personne);

    void updateProfileImg(String username, MultipartFile imgFile) throws IOException;
    byte[] getProfileImg(String username) throws IOException;

    String suprimer_personne(Long id);
    String restorePersonne(Long id);

    List<Personne> listePersonne();

    Personne getPersonneById(Long id);
    Personne getPersonneByUsername(String username);
    List<Personne> getPersonneByProfile(Profile profile);

    String getPersonEmail(String email);
    String getPersonUsername(String username);
    Integer getPersonTelephone(Integer telephone);

    String changePassword(String username, String newPassword);
    String sendEmailToUser(String email) throws MalformedURLException;
    String setPersonStatut(Long idPerson, Etat etat);

    void saveRole(Role role);
    void addRoleToPerson(String username, String roleName);

    List<Medecin> getMedecinByCabinetMedicale(CabinetMedicale cabinetMedicale);
}
