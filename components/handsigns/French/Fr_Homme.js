import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const HommeSign = new GestureDescription('Homme');

//Thumb
HommeSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
HommeSign.addDirection(Finger.Index, FingerDirection.Horizontalleft, 0.6);

//Index
HommeSign.addCurl(Finger.Index, FingerCurl.NoCurl, 0.9);
HommeSign.addDirection(Finger.Index, FingerDirection.DiagonalUpleft, 0.9);

//Middle
HommeSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9);
HommeSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpleft, 0.9);

//Ring
HommeSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9);
HommeSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpleft, 0.6);

//Pinky
HommeSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9);
HommeSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

