    CREATE TABLE videos_long(
        video_id INT NOT NULL AUTO_INCREMENT,
        video_title VARCHAR(255) NOT NULL,
        video_description VARCHAR(255) NOT NULL,
        video_url VARCHAR(255) NOT NULL,
        video_thumbnail VARCHAR(255) NOT NULL,
        video_duration INT NOT NULL,
        video_created_at DATETIME NOT NULL,
        video_updated_at DATETIME NOT NULL,
        channel_id INT NOT NULL,
        PRIMARY KEY (video_id)
    );

CREATE TABLE videos_short(
    video_id INT NOT NULL AUTO_INCREMENT,
    video_title VARCHAR(255) NOT NULL,
    video_description VARCHAR(255) NOT NULL,
    video_url VARCHAR(255) NOT NULL,
    video_thumbnail VARCHAR(255) NOT NULL,
    video_duration INT NOT NULL,
    video_created_at DATETIME NOT NULL,
    video_updated_at DATETIME NOT NULL,
    channel_id INT NOT NULL,
    PRIMARY KEY (video_id)
);

CREATE TABLE channels(
    channel_id INT NOT NULL AUTO_INCREMENT,
    channel_name VARCHAR(255) NOT NULL,
    channel_banner_url VARCHAR(255) NOT NULL,
    channel_username VARCHAR(255) NOT NULL,
    channel_description VARCHAR(255) NOT NULL,
    channel_profile_picture VARCHAR(255) NOT NULL,
    channel_created_at DATETIME NOT NULL,
    channel_updated_at DATETIME NOT NULL,
    PRIMARY KEY (channel_id)
);

CREATE TABLE channel_subscribe(
    channel_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (channel_id)
);

CREATE TABLE users(
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_profile_picture VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_created_at DATETIME NOT NULL,
    user_updated_at DATETIME NOT NULL,
    PRIMARY KEY (user_id)
);

