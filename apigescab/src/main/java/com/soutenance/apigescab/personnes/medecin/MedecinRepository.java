package com.soutenance.apigescab.personnes.medecin;

import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedecinRepository extends JpaRepository<Medecin, Long>
{
    List<Medecin> findByCabinetMedicale(CabinetMedicale cabinetMedicale);
}
