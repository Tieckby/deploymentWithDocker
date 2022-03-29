package com.soutenance.apigescab.cabinetSpecialite;

import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import com.soutenance.apigescab.specialites.Specialite;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="cabinet_specialite")
public class CabinetSpecialite
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCabinetSpecialite;

    @ManyToOne
    private CabinetMedicale cabinetMedicale;

    @ManyToOne
    private Specialite specialite;
}
