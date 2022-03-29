package com.soutenance.apigescab.cabinetMedicale;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.soutenance.apigescab.cabinetSpecialite.CabinetSpecialite;
import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.rive.Rive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CabinetMedicale
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCabinet;

    @Column(nullable = false)
    private Boolean isDelete = false;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String descriptif;

    @Column(nullable = false)
    private String adresse;

    @Column(nullable = false)
    private String longitude;

    @Column(nullable = false)
    private String latitude;

    @Column(nullable = false, unique = true)
    private Integer telephone;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String horaire;

    @Column(nullable = false)
    private Integer tarifsConsultations;

    @JsonIgnore
    @OneToMany(mappedBy = "cabinetMedicale")
    private List<Medecin> medecinList;

    @JsonIgnore
    @OneToMany(mappedBy = "cabinetMedicale")
    List<CabinetSpecialite> cabinetSpecialites;

    @ManyToOne
    private Rive rive;
}
