import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ExempleSign = new GestureDescription('Exemple');

//Thumb
ExempleSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
ExempleSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

//Index
ExempleSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
ExempleSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
ExempleSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
ExempleSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

//Ring
ExempleSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ExempleSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

//Pinky
ExempleSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ExempleSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

