package com.soutenance.apigescab.personnes.patient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.soutenance.apigescab.personnes.Personne;
import com.soutenance.apigescab.personnes.administrateurs.Admin;
import com.soutenance.apigescab.rendezvous.RendezVous;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorValue(value = "PATIENT")
@Setter
@Getter
@RequiredArgsConstructor
public class Patient extends Personne
{
    private String profession;

    @JsonIgnore
    @OneToMany(mappedBy = "patient")
    private List<RendezVous> rendezVousList;

    @ManyToMany
    private List<Admin> adminList;
}
