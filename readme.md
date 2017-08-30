# Headless (Horseman) Drupal Setup

Ok so here's the story. You can use Drupal as your backend CMS (so that non-tech folks can enter data as they normally would) but remove the front end bits (the headless part). Then you can grab all of the data as JSON via Drupal 8's API stuff.

You can read all about it:

[here](https://medium.com/@Userium/headless-drupal-build-a-drupal-8-api-with-a-reactjs-front-end-e43bf0fb94db) and

[here](https://www.adcisolutions.com/knowledge/how-create-headless-drupal-site).

The instructions are fairly straight-forward.

Don't forget when you set up your Drupal site to include something to mitigate CORS. Something as simple as adding

```php
  header('Access-Control-Allow-Origin: *');
```

to ```index.php``` should do the trick but hey you might be smarter than me and have a better way of pulling this.

Anyway. I set mine up to pull in an Events content-type but really you could do whatever and then make sure to update ```App.js```.
