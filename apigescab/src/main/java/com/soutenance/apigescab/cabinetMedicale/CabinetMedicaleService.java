package com.soutenance.apigescab.cabinetMedicale;

import com.soutenance.apigescab.rive.Rive;
import com.soutenance.apigescab.specialites.Specialite;

import java.util.List;

public interface CabinetMedicaleService {
    String ajouter_cabinetmedicale(CabinetMedicale cabinetmedicale);
    void modifier_cabinetmedicale(Long id, CabinetMedicale cabinetmedicale);
    String suprimer_cabinetmedicale(Long id);
    String restore_cabinetmedicale_suprimer(Long id);
    List<CabinetMedicale> listeCabinetMedicale();
    CabinetMedicale getCabinetMedicaleById(Long id);

    void saveCabinetSpecialite(CabinetMedicale cabinetMedicale, Specialite specialite);
    List<Specialite> getCabinetSpecialites(CabinetMedicale cabinetMedicale);
    List<CabinetMedicale> getCabinetByRive(Rive rive);

}
