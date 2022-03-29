package com.soutenance.apigescab.personnes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonneRepository extends JpaRepository<Personne, Long>
{
    Personne findByUsername(String username);
    Personne findByEmail(String email);

    @Query("SELECT person.username FROM Personne person WHERE person.username=:username")
    String getPersonUsername(@Param("username") String username);

    @Query("SELECT person.email FROM Personne person WHERE person.email=:email")
    String getPersonEmail(@Param("email") String email);

    @Query("SELECT person.telephone FROM Personne person WHERE person.telephone=:telephone")
    Integer getPersonTelephone(@Param("telephone") Integer telephone);

    //Find all profiles where they have not deleted
    List<Personne> findByProfileAndIsDelete(Profile profile, boolean isDelete);
}
