package com.akhil.backend.repo;

import com.akhil.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends MongoRepository<User, String> {
    Optional<User> findByClerkId(String clerkId);
    Boolean existsByClerkId(String clerkId);
}
