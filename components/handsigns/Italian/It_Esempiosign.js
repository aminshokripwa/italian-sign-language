import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const EsempioSign = new GestureDescription('Esempio');

//Thumb
EsempioSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
EsempioSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
EsempioSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
EsempioSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
EsempioSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

//Middle
EsempioSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
EsempioSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

//Ring
EsempioSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
EsempioSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

//Pinky
EsempioSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
EsempioSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

