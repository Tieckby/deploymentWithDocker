package com.soutenance.apigescab.cabinetMedicale;

import com.soutenance.apigescab.rive.Rive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CabinetMedicalRepository extends JpaRepository<CabinetMedicale, Long>
{
    List<CabinetMedicale> findByRive(Rive rive);
}
