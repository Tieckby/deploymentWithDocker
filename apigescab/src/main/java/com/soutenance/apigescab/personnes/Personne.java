package com.soutenance.apigescab.personnes;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.soutenance.apigescab.personnes.administrateurs.Admin;
import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.personnes.patient.Patient;
import com.soutenance.apigescab.personnes.role.Role;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "person_type", discriminatorType = DiscriminatorType.STRING)
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "person_type")
@JsonSubTypes({
        @JsonSubTypes.Type(name = "ADMIN", value = Admin.class),
        @JsonSubTypes.Type(name = "MEDECIN", value = Medecin.class),
        @JsonSubTypes.Type(name = "PATIENT", value = Patient.class),
})
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Personne
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPerson;

    @Column(nullable = false)
    private Boolean isDelete = false;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.ACTIVER;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Profile profile;

    @ManyToMany(fetch = FetchType.EAGER)    //All the roles are fetched from the database at the time the personne is fetched
    private Collection<Role> roles = new ArrayList<>();

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    @Column(nullable = false)
    private String adresse;

    @Column(nullable = false, unique = true)
    private Integer telephone;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String genre;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String imageProfile;
}
