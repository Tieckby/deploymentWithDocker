package com.soutenance.apigescab.rive;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Rive
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRive;

    private String nomRive;

    @JsonIgnore
    @OneToMany(mappedBy = "rive")
    private List<CabinetMedicale> cabinetMedicales;
}
