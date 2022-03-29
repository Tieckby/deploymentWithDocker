package com.soutenance.apigescab.rendezvous;

import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.personnes.patient.Patient;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class RendezVous
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRDV;

    @Column(nullable = false)
    private Boolean isDelete = false;

    private Boolean isValid;

    @Column(nullable = false)
    private LocalDate rdvDate;

    @Column(nullable = false)
    private LocalTime rdvHeure;

    @Column(nullable = false)
    private LocalTime heureEcheance;

    @Column(nullable = false)
    private String symptom;

    @ManyToOne
    private Medecin medecin;

    @ManyToOne
    private Patient patient;

}
