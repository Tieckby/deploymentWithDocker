package com.soutenance.apigescab.specialites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import com.soutenance.apigescab.cabinetSpecialite.CabinetSpecialite;
import com.soutenance.apigescab.personnes.medecin.Medecin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Specialite
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSpecialite;

    @Column(nullable = false)
    private Boolean isDelete = false;

    @Column(nullable = false)
    private String nom;

    @JsonIgnore
    @OneToMany(mappedBy = "specialite")
    private List<Medecin> medecinList;

    @JsonIgnore
    @OneToMany(mappedBy = "specialite")
    List<CabinetSpecialite> cabinetSpecialites;

}
