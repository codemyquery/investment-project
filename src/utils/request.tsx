/**
 *  * Compute the canonical form of the URL's query string, if any
 *  */
export const computeCanonicalQueryString = (queryParams: any) => {
    if (queryParams === null) {
        return "";
    }
    return _GetObjectCanonicalQueryString(queryParams, "");
}
function _GetObjectCanonicalQueryString(iQueryObject: any, iParentKey: any) {
    if (iQueryObject === null) {
        return "";
    }
    // --- Sort headers by ascii code (i.e. uppercase alphabetical then lowercase alphabetical)
    const cSortedKeys = Object.keys(iQueryObject);
    const keyCount = cSortedKeys.length;
    cSortedKeys.sort();

    let oCanonicalQueryString = "";

    for (let i = 0; i < keyCount; ++i) {
        const cKey = cSortedKeys[i];
        let cValue = iQueryObject[cKey];
        if (cValue === null) {
            cValue = "null";
        }
        const cKeyStr = iParentKey ? iParentKey + "[" + cKey + "]" : cKey;
        if (cValue instanceof Array) {
            oCanonicalQueryString += _GetArrayCanonicalQueryString(cValue, cKeyStr);
        } else if (cValue instanceof Object) {
            oCanonicalQueryString += _GetObjectCanonicalQueryString(cValue, cKeyStr);
        } else {
            oCanonicalQueryString +=
                encodeURIComponent(cKeyStr) + "=" + encodeURIComponent(cValue);
        }
        if (i < keyCount - 1) {
            oCanonicalQueryString += "&";
        }
    }
    return oCanonicalQueryString;
}
function _GetArrayCanonicalQueryString(iArray: any[], iKeyStr: string) {
    let oCanonicalString = "";

    const cKeyArray = iKeyStr + "[]";
    const cc = iArray.length;

    for (let i = 0; i < cc; ++i) {
        const cValue = iArray[i];
        if (cValue instanceof Object) {
            throw new Error(
                "Authentication::_GetCanonicalQueryString We do not support Array with multiple level in query for now in this parameter : "
            );
        }
        oCanonicalString +=
            encodeURIComponent(cKeyArray) + "=" + encodeURIComponent(cValue);
        if (i !== cc - 1) {
            oCanonicalString += "&";
        }
    }
    return oCanonicalString;
}