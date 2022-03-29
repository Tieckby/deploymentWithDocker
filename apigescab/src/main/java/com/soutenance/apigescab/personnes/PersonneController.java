package com.soutenance.apigescab.personnes;


import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.personnes.role.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.*;
import java.util.stream.Collectors;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;

@CrossOrigin
@RestController
@RequestMapping(path = "/gescab_db/api/v1/personne")
public class PersonneController {
    @Autowired
    PersonneServiceImpl personneServiceImpl;

    //Ajouter une personne
   @PostMapping("/add")
   public String addPersonne(@RequestBody Personne personne){
       return personneServiceImpl.ajouter_personne(personne);
   }

   //Cas de Modification d'une personne
   @PutMapping("/update/{id}")
   public String updatePersonne(@PathVariable Long id, @RequestBody Personne personne){
       personneServiceImpl.modifier_personne(id, personne);

       return "Personne modifié avec succès";
   }

   @PostMapping(value = "/uploadImg/{username}")
   public String uploadProfileImg(@PathVariable("username") String username, @RequestParam("file")MultipartFile imgFile) throws IOException {
       personneServiceImpl.updateProfileImg(username, imgFile);
       return "Profile modifié avec succès";
   }

   @GetMapping(value = "/getProfileImg/{username}", produces = {MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE})
   public byte[] getProfileImg(@PathVariable("username") String username) throws IOException {
       return personneServiceImpl.getProfileImg(username);
   }

    //Supprimer une personne
    @DeleteMapping("/delete/{id}")
    public String supprimerPersonne(@PathVariable Long id){
        return personneServiceImpl.suprimer_personne(id);
    }

    @GetMapping("/restore/{id}")
    public String restorePersonne(@PathVariable("id") Long id){
       return personneServiceImpl.restorePersonne(id);
    }

    //Pour lister tout les personnes
    @GetMapping("/getAll")
    public List<Personne> listePersonne(){
       return personneServiceImpl.listePersonne();
    }

    @GetMapping("/getOne/{id}")
    public Personne getOnePersonne(@PathVariable("id") Long id){
       return personneServiceImpl.getPersonneById(id);
    }

    @GetMapping("/getByUsername/{username}")
    public Personne getPersonByUsername(@PathVariable("username") String username)
    {
        return personneServiceImpl.getPersonneByUsername(username);
    }

    @GetMapping("/getByProfile/{profile}")
    public List<Personne> getPersonByProfile(@PathVariable("profile") Profile profile)
    {
        return personneServiceImpl.getPersonneByProfile(profile);
    }

    @PostMapping("/getMedecinByCabinetMedicale")
    public List<Medecin> getMedecinByCabinetMedicale(@RequestBody CabinetMedicale cabinetMedicale)
    {
        return personneServiceImpl.getMedecinByCabinetMedicale(cabinetMedicale);
    }

    @GetMapping("/changePassword/{username}/{newPassword}")
    public String updatePassword(@PathVariable("username") String username, @PathVariable("newPassword") String newPassword)
    {
        return personneServiceImpl.changePassword(username, newPassword);
    }

    @GetMapping("/sendEmail/{email}")
    public String sendEmail(@PathVariable("email") String email) throws MalformedURLException {
        return personneServiceImpl.sendEmailToUser(email);
    }

    @GetMapping("/setStatut/{id}/{etat}")
    public String setPersonneStatut(@PathVariable("id") Long idPerson, @PathVariable("etat") Etat etat)
    {
        return personneServiceImpl.setPersonStatut(idPerson, etat);
    }

    @GetMapping("/getEmail/{email}")
    public String getPersonEmail(@PathVariable("email") String email)
    {
        return personneServiceImpl.getPersonEmail(email);
    }

    @GetMapping("/getUsername/{username}")
    public String getPersonUsername(@PathVariable("username") String username)
    {
        return personneServiceImpl.getPersonUsername(username);
    }

    @GetMapping("/getTelephone/{telephone}")
    public Integer getPersonTelephone(@PathVariable("telephone") Integer telephone)
    {
        return personneServiceImpl.getPersonTelephone(telephone);
    }

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if(authorizationHeader != null && authorizationHeader.startsWith("token:"))
        {
            try
            {
                String refreshToken = authorizationHeader.substring("token:".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refreshToken);
                String username = decodedJWT.getSubject();
                Personne personne = personneServiceImpl.getPersonneByUsername(username);
                String accessToken = JWT.create()
                        .withSubject(personne.getUsername())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 24 * 60 * 60 * 1000))
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("roles", personne.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                        .sign(algorithm);

                Map<String, String> tokens = new HashMap<>();
                tokens.put("AccessToken", accessToken);
                tokens.put("refreshToken", refreshToken);
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);

            }catch (Exception exception)
            {
                response.setStatus(FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("Error", exception.getMessage());
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        }
        else
        {
            throw new RuntimeException("Refresh token est is missing");
        }
    }

}

