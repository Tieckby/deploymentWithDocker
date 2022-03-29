package com.soutenance.apigescab.cabinetSpecialite;

import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import com.soutenance.apigescab.specialites.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CabinetSpecialiteRepo extends JpaRepository<CabinetSpecialite, Long>
{
    @Query("SELECT capSpec.specialite FROM CabinetSpecialite capSpec WHERE capSpec.cabinetMedicale=:cabinet")
    List<Specialite> findSpecialiteByCabinetMedicale(@Param("cabinet") CabinetMedicale cabinetMedicale);
}
