package com.soutenance.apigescab.rive;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/gescab_db/api/v1/rive")
public class RiveController
{
    @Autowired
    RiveServiceImpl riveServiceImpl;

    @PostMapping("/add")
    public String addRive(@RequestBody Rive rive)
    {
        riveServiceImpl.saveRive(rive);
        return "Rive ajoutée avec succès !";
    }

    @GetMapping("/getAll")
    public List<Rive> getAllRive()
    {
        return riveServiceImpl.getAllRive();
    }
}
