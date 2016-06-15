import { Meteor } from 'meteor/meteor';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if (Meteor.isClient) {
  checkNpmVersions({
    'apollo-client': '^0.3.12'
  }, 'apollo');
} else {
  checkNpmVersions({
    'apollo-server': '^0.1.1',
    'express': '^4.13.4',
    'http-proxy-middleware': '^0.15.0'
  }, 'apollo');
}
