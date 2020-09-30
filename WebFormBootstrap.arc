//#charset: windows-1252

VERSION "4.0"

WINDOW 101 "" 200 200 651 176
BEGIN
    EVENTMASK 0
    KEYBOARDNAVIGATION
    NAME "Window101"
    INPUTN 100, "000000", 106, 10, 90, 25
    BEGIN
        MASK "000000"
        NAME "IPN_CDNUMBER"
        RESTORESTRING "0"
        NOT INSERTMODE
    END

    STATICTEXT 102, "CD Number:", 10, 10, 90, 25
    BEGIN
        NAME "LBL_CDNUMBER"
    END

    STATICTEXT 104, "Title:", 10, 41, 90, 25
    BEGIN
        NAME "LBL_TITLE"
    END

    INPUTE 103, "", 106, 41, 278, 25
    BEGIN
        NAME "IPE_TITLE"
        PADCHARACTER 32
        READONLY
    END

    STATICTEXT 105, "Artist:", 10, 73, 90, 25
    BEGIN
        NAME "LBL_ARTIST"
    END

    INPUTE 106, "", 106, 73, 278, 25
    BEGIN
        NAME "IPE_ARTIST"
        PADCHARACTER 32
        READONLY
    END

    BUTTON 2, "Clear", 486, 41, 90, 25
    BEGIN
        NAME "BTN_CLEAR"
    END

    BUTTON 1, "Save", 486, 73, 90, 25
    BEGIN
        NAME "BTN_SAVE"
    END

END

