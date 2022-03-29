package com.soutenance.apigescab.personnes.medecin;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import com.soutenance.apigescab.personnes.Personne;
import com.soutenance.apigescab.personnes.administrateurs.Admin;
import com.soutenance.apigescab.rendezvous.RendezVous;
import com.soutenance.apigescab.specialites.Specialite;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorValue(value = "MEDECIN")
@Setter
@Getter
@RequiredArgsConstructor
public class Medecin extends Personne
{
    @ManyToOne
    private Specialite specialite;

    @ManyToOne
    private CabinetMedicale cabinetMedicale;

    @JsonIgnore
    @OneToMany(mappedBy = "medecin")
    private List<RendezVous> rendezVousList;

    @ManyToMany
    private List<Admin> adminList;
}
