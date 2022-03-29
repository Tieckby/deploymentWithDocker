package com.soutenance.apigescab.personnes.administrateurs;

import com.soutenance.apigescab.personnes.Personne;
import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.personnes.patient.Patient;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorValue(value = "ADMIN")
@Setter
@Getter
@RequiredArgsConstructor
public class Admin extends Personne
{
    @OneToMany
    private List<Admin> adminList;

    @ManyToMany(mappedBy = "adminList")
    private List<Medecin> medecinList;

    @ManyToMany(mappedBy = "adminList")
    private List<Patient> patientList;
}
