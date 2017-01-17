************
NOTE: This theme is in early development and not complete or ready for use.
************

EBI FRAMEWORK CHILD THEME FOR ZURB FOUNDATION
---------------------------------------------

This integrate the EBI Framework into a Drupal sub-theme.

Installing this theme
---------------------

-  Add this theme your Drupal 8 /themes directory.
-  Add the zurb_foundation Drupal 8 theme to the /themes directory.
   Ensure you use the 8.x-6.x variant.
   
Installing with composer.json
-----------------------------

If you wish to install with your Drupal site's composer.json file, add these two chunks of code to the indicated areas of composer.json
```
    "require": {
        "ebiwd/drupal_8_ebi_framework": "dev-8.x-1.1"
    },
```
and
```
    "repositories": {
        "ebiwd": {
            "type": "vcs",
            "url": "https://github.com/ebiwd/drupal_8_ebi_framework"
        }
    }
```

Note that this theme's composer.json will require the Drupal Foundation base theme.

You can find more guidance on using Git with Composer at https://getcomposer.org/doc/05-repositories.md#vcs


Developing further with the subtheme
------------------------------------

If you wish to develop with the SCSS, you will need bower and npm on your 
machine, although once in production npm and bower are not necessary for general use.

Once you have ensured those are installed, run these commands at the root of
your sub theme:
- `npm install`
- `bower install`

Finally, run `npm start` to run the Sass compiler. It will re-run every time
you save a Sass file. Press Ctrl-C to break out of watching files.

Optional steps:

 -  Modify the markup in Foundation core theme's template files.

    If you decide you want to modify any of the .html.twig template files in the
    zurb_foundation folder, copy them to your sub-theme's folder before
    making any changes.And then rebuild the theme registry.

    For example, copy zurb_foundation/templates/page.html.twig to
    THEMENAME/templates/page.html.twig.

 -  Optionally override existing Drupal core *.html.twig templates in your sub-theme.

 -  Add custom css and js files to your sub-theme

    Rename STARTER.libraries.yml to the name of your sub-theme, un-commenting
    lines and making name changes as needed.

    You'll also need to edit your info.yml file to include your new library.
    There are instructions in the info.yml file to help you do this.

 -  Further extend your sub-theme.

    Discover further ways to extend your sub-theme by reading 
    Drupal 8's Theme Guide online at: https://www.drupal.org/theme-guide/8
