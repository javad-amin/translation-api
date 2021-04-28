CREATE TABLE dic ( 
    `lang` CHAR(5) NOT NULL,
    `key` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL ,
    `value` TEXT CHARACTER SET utf8 COLLATE utf8_bin NOT NULL ,    
    PRIMARY KEY(`lang`, `key`)
);

