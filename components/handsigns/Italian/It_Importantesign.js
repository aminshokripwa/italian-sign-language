import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ImportanteSign = new GestureDescription('Importante');

//Thumb
ImportanteSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ImportanteSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
ImportanteSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

//Index
ImportanteSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ImportanteSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
ImportanteSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

//Middle
ImportanteSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ImportanteSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
ImportanteSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

//Ring
ImportanteSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ImportanteSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
ImportanteSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

//Pinky
ImportanteSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ImportanteSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
ImportanteSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);
