import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ImportantSign = new GestureDescription('Important');

//Thumb
ImportantSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
ImportantSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.9);

//Index
ImportantSign.addCurl(Finger.Index, FingerCurl.NoCurl, 0.9);
ImportantSign.addCurl(Finger.Index, FingerCurl.FullCurl, 0.9);
ImportantSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.9);

//Middle
ImportantSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ImportantSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.9);

//Ring
ImportantSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ImportantSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.9);

//Pinky
ImportantSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ImportantSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.9);

