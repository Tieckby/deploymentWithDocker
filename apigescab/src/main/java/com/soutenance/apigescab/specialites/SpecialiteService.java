package com.soutenance.apigescab.specialites;

import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;

import java.util.List;

public interface SpecialiteService
{
    String addSpecialite(Specialite specialite);
    void modifySpecialite(Long id, Specialite specialite);
    String deleteSpecialite(Long id);
    String restoreSpecialite(Long id);
    List<Specialite> getAllSpecialtes();
    Specialite getOneSpecialite(Long id);
}
