<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'ecommerce');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '}+l6P4q0Cqw`g[Yzb-J*553}0a4Ax/HT<2=+wzzC,`Bp#f>[8T:qlc)yUy_!nywi');
define('SECURE_AUTH_KEY',  'wJ5sTmApg6,oT(0((Gvm&P{xhdK9H:?M-(-)g^kaJv%}+EcoH*7n6iGRb8Z!Tg%5');
define('LOGGED_IN_KEY',    'zk,l!hx `M&e#ehEHA+ hjg6%T(,(of |d|;m<*ieLPTLu;D/+Au]zkAKP nrwjr');
define('NONCE_KEY',        'aBK063j#Wm#:bF_}`;}I}_4m2,0:A.@eR!`{g%J8OLKos:x_XoW AU1Ga{pCRL(C');
define('AUTH_SALT',        'O`-z`fr]E,m)fKGzC+}I<Cn$6>]c9]Zuys1)UL l}b((;BnNZ%+%o xf:Om?L x)');
define('SECURE_AUTH_SALT', 'MMGzHx=:v)nD$4|*Vq8MQv8SK7}6fyK7Zog->H634f@nKxUS];<jfd[!m?9N#yJ:');
define('LOGGED_IN_SALT',   '`.@.S;P#8;+.Nqxa(hXVPm]D6.}l4xD1eTihAa4A%<0thEmZg1*|o4(G+0zzLe|-');
define('NONCE_SALT',       '7&f8Ts%q&S1q)BvW2 +kA.$%i&6z$%i+@r$od;P|BIDl:eh,8vEoUbTE(]N=yvM!');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');