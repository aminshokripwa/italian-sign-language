import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const EsperienzaSign = new GestureDescription('Esperienza');

//Thumb
EsperienzaSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
EsperienzaSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

//Index
EsperienzaSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
EsperienzaSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

//Middle
EsperienzaSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
EsperienzaSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

//Ring
EsperienzaSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
EsperienzaSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

//Pinky
EsperienzaSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
EsperienzaSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

