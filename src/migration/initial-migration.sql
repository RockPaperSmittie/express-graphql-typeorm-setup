CREATE TABLE "user_entity" 
(
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL, 
    "userName" character varying NOT NULL, 
    "email" character varying NOT NULL, 
    "createdDate" character varying NOT NULL, 
    "dateOfBirth" character varying NOT NULL, 
    "profilePictureUrl" character varying, 
    CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id")
);