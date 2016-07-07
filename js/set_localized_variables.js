/**
 *
 * @source: https://github.com/fightforthefuture/eunetneutrality
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) Fight for the Future
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

var language  = (window.navigator.userLanguage || window.navigator.language).toLowerCase(),
    iso       = language.substr(0, 2);

window.l10n || (window.l10n = {});

switch (iso) {
  
    case 'en':
      window.l10n['CODE'] = 'en';
      window.l10n['LANG'] = 'English';
      window.l10n['WIDGET_BEGINNING'] = 'We have';
      window.l10n['DAY_SINGULAR'] = 'day';
      window.l10n['DAY_PLURAL'] = 'days';
      window.l10n['HOUR_SINGULAR'] = 'hour';
      window.l10n['HOUR_PLURAL'] = 'hours';
      window.l10n['AND'] = 'and';
      window.l10n['MINUTE_SINGULAR'] = 'minute';
      window.l10n['MINUTE_PLURAL'] = 'minutes';
      window.l10n['WIDGET_ENDING'] = 'to save Europe’s Internet.';
      window.l10n['WIDGET_LINK_TEXT'] = 'Save Net Neutrality';
      
      break;
  
    case 'es':
      window.l10n['CODE'] = 'es';
      window.l10n['PAGE_TRANSLATION'] = 'true';
      window.l10n['LANG'] = 'Spanish';
      window.l10n['WIDGET_BEGINNING'] = 'Tenemos';
      window.l10n['DAY_SINGULAR'] = 'día';
      window.l10n['DAY_PLURAL'] = 'días';
      window.l10n['HOUR_SINGULAR'] = 'hora';
      window.l10n['HOUR_PLURAL'] = 'horas';
      window.l10n['AND'] = 'y';
      window.l10n['MINUTE_SINGULAR'] = 'minuto';
      window.l10n['MINUTE_PLURAL'] = 'minutos';
      window.l10n['WIDGET_ENDING'] = 'para salvar el Internet en Europa.';
      window.l10n['WIDGET_LINK_TEXT'] = 'Salva la neutralidad de la red';
      
      break;
  
    case 'de':
      window.l10n['CODE'] = 'de';
      window.l10n['PAGE_TRANSLATION'] = 'true';
      window.l10n['LANG'] = 'German';
      window.l10n['WIDGET_BEGINNING'] = 'Wir haben';
      window.l10n['DAY_SINGULAR'] = 'Tag';
      window.l10n['DAY_PLURAL'] = 'Tage';
      window.l10n['HOUR_SINGULAR'] = 'Stunde';
      window.l10n['HOUR_PLURAL'] = 'Stunden';
      window.l10n['AND'] = 'und';
      window.l10n['MINUTE_SINGULAR'] = 'Minute';
      window.l10n['MINUTE_PLURAL'] = 'Minuten';
      window.l10n['WIDGET_ENDING'] = 'Zeit, um das Internet in Europa zu retten.';
      window.l10n['WIDGET_LINK_TEXT'] = 'Rettet die Netzneutralität';
      
      break;
  
    case 'fr':
      window.l10n['CODE'] = 'fr';
      window.l10n['PAGE_TRANSLATION'] = 'false';
      window.l10n['LANG'] = 'French';
      window.l10n['WIDGET_BEGINNING'] = 'Nous avons';
      window.l10n['DAY_SINGULAR'] = 'jour';
      window.l10n['DAY_PLURAL'] = 'jours';
      window.l10n['HOUR_SINGULAR'] = 'heure';
      window.l10n['HOUR_PLURAL'] = 'heures';
      window.l10n['AND'] = 'et';
      window.l10n['MINUTE_SINGULAR'] = 'minute';
      window.l10n['MINUTE_PLURAL'] = 'minutes';
      window.l10n['WIDGET_ENDING'] = 'pour sauver Internet en Europe.';
      window.l10n['WIDGET_LINK_TEXT'] = 'Sauvons la neutralité du Net';
      
      break;
  
    case 'it':
      window.l10n['CODE'] = 'it';
      window.l10n['PAGE_TRANSLATION'] = 'false';
      window.l10n['LANG'] = 'Italian';
      window.l10n['WIDGET_BEGINNING'] = 'Tenemos';
      window.l10n['DAY_SINGULAR'] = 'día';
      window.l10n['DAY_PLURAL'] = 'días';
      window.l10n['HOUR_SINGULAR'] = 'hora';
      window.l10n['HOUR_PLURAL'] = 'horas';
      window.l10n['AND'] = 'and';
      window.l10n['MINUTE_SINGULAR'] = 'minuto';
      window.l10n['MINUTE_PLURAL'] = 'minutos';
      window.l10n['WIDGET_ENDING'] = 'para salvar la Internet en Europea.';
      window.l10n['WIDGET_LINK_TEXT'] = 'Salva neutralidad';
      
      break;
  

    default:
      window.l10n['CODE'] = 'en';
      window.l10n['LANG'] = 'English';
      window.l10n['WIDGET_BEGINNING'] = 'We have';
      window.l10n['DAY_SINGULAR'] = 'day';
      window.l10n['DAY_PLURAL'] = 'days';
      window.l10n['HOUR_SINGULAR'] = 'hour';
      window.l10n['HOUR_PLURAL'] = 'hours';
      window.l10n['AND'] = 'and';
      window.l10n['MINUTE_SINGULAR'] = 'minute';
      window.l10n['MINUTE_PLURAL'] = 'minutes';
      window.l10n['WIDGET_ENDING'] = 'to save Europe’s Internet.';
      window.l10n['WIDGET_LINK_TEXT'] = 'Save Net Neutrality';
      
}

var fullPageTranslations = [
  'es','de',
];

if (fullPageTranslations.indexOf(iso) !== -1 && iso != 'en' && window.location.pathname == '/')
  window.location.replace('/' + iso + window.location.search);