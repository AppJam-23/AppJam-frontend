export function Home({selected}){
    if(selected === true){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35" fill="none">
                <path d="M21.6881 1.07021C21.0386 0.574537 20.2392 0.30542 19.4164 0.30542C18.5935 0.30542 17.7941 0.574537 17.1446 1.07021L1.63451 12.9036C0.24334 13.969 1.00922 16.156 2.77224 16.156H4.61665V30.6755C4.61665 31.6382 5.00646 32.5615 5.70033 33.2423C6.3942 33.923 7.3353 34.3054 8.31658 34.3054H15.7164V23.4158C15.7164 22.4531 16.1062 21.5298 16.8001 20.8491C17.494 20.1683 18.4351 19.7859 19.4164 19.7859C20.3976 19.7859 21.3387 20.1683 22.0326 20.8491C22.7265 21.5298 23.1163 22.4531 23.1163 23.4158V34.3054H30.5161C31.4974 34.3054 32.4385 33.923 33.1324 33.2423C33.8262 32.5615 34.2161 31.6382 34.2161 30.6755V16.156H36.0605C37.8216 16.156 38.5912 13.969 37.1982 12.9054L21.6881 1.07021Z" fill="black"/>
            </svg>
        )
    }
    else{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M18.2284 3.76488C18.8352 3.3017 19.5741 3.03551 20.3423 3.00331C21.1105 2.97111 21.8698 3.1745 22.5147 3.5852L22.7719 3.7667L38.282 15.6001C39.6158 16.6183 38.9665 18.671 37.3589 18.8397L37.1443 18.8506H35.2999V33.3701C35.3002 34.2859 34.9476 35.1679 34.3129 35.8394C33.6782 36.5109 32.8082 36.9222 31.8774 36.9909L31.5999 37H9.40032C8.46719 36.9998 7.56858 36.6538 6.88452 36.0311C6.20046 35.4085 5.78147 34.5552 5.71148 33.6424L5.70038 33.3701V18.8506H3.85597C2.16695 18.8506 1.39181 16.8397 2.55544 15.738L2.71824 15.6001L18.2284 3.76488ZM20.5001 6.63067L8.70658 15.6291C9.13022 15.9649 9.40032 16.4785 9.40032 17.0538V33.3701H14.9502V24.2954C14.9502 22.8514 15.5349 21.4665 16.5757 20.4454C17.6166 19.4243 19.0282 18.8506 20.5001 18.8506C21.972 18.8506 23.3837 19.4243 24.4245 20.4454C25.4653 21.4665 26.05 22.8514 26.05 24.2954V33.3701H31.5999V17.0538C31.5999 16.4785 31.87 15.9649 32.2937 15.6291L20.5001 6.63067ZM20.5001 22.4805C20.0095 22.4805 19.5389 22.6717 19.192 23.0121C18.8451 23.3525 18.6502 23.8141 18.6502 24.2954V33.3701H22.3501V24.2954C22.3501 23.8141 22.1552 23.3525 21.8082 23.0121C21.4613 22.6717 20.9908 22.4805 20.5001 22.4805Z" fill="black"/>
            </svg>
        )
    }
}
export function People({selected}){
    if(selected === true){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="35" viewBox="0 0 47 35" fill="none">
                <path d="M20.5625 35C20.5625 35 17.625 35 17.625 32.0833C17.625 29.1667 20.5625 20.4167 32.3125 20.4167C44.0625 20.4167 47 29.1667 47 32.0833C47 35 44.0625 35 44.0625 35H20.5625ZM32.3125 17.5C34.6497 17.5 36.8912 16.5781 38.5439 14.9372C40.1965 13.2962 41.125 11.0706 41.125 8.75C41.125 6.42936 40.1965 4.20376 38.5439 2.56282C36.8912 0.921873 34.6497 0 32.3125 0C29.9753 0 27.7338 0.921873 26.0811 2.56282C24.4285 4.20376 23.5 6.42936 23.5 8.75C23.5 11.0706 24.4285 13.2962 26.0811 14.9372C27.7338 16.5781 29.9753 17.5 32.3125 17.5ZM15.322 35C14.8865 34.0895 14.6694 33.0912 14.6875 32.0833C14.6875 28.1313 16.685 24.0625 20.3745 21.2333C18.533 20.6699 16.6143 20.3944 14.6875 20.4167C2.9375 20.4167 0 29.1667 0 32.0833C0 35 2.9375 35 2.9375 35H15.322ZM13.2188 17.5C15.1664 17.5 17.0343 16.7318 18.4116 15.3643C19.7888 13.9969 20.5625 12.1422 20.5625 10.2083C20.5625 8.27446 19.7888 6.4198 18.4116 5.05235C17.0343 3.68489 15.1664 2.91667 13.2188 2.91667C11.2711 2.91667 9.40315 3.68489 8.02593 5.05235C6.64871 6.4198 5.875 8.27446 5.875 10.2083C5.875 12.1422 6.64871 13.9969 8.02593 15.3643C9.40315 16.7318 11.2711 17.5 13.2188 17.5Z" fill="black"/>
            </svg>
        )
    }
    else{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="35" viewBox="0 0 47 35" fill="none">
                <path d="M44.0625 35C44.0625 35 47 35 47 32.0833C47 29.1667 44.0625 20.4167 32.3125 20.4167C20.5625 20.4167 17.625 29.1667 17.625 32.0833C17.625 35 20.5625 35 20.5625 35H44.0625ZM20.6271 32.0833C20.6054 32.0804 20.5839 32.0765 20.5625 32.0717C20.5654 31.3017 21.0531 29.0675 22.795 27.055C24.4165 25.1679 27.2659 23.3333 32.3125 23.3333C37.3562 23.3333 40.2056 25.1708 41.83 27.055C43.5719 29.0675 44.0566 31.3046 44.0625 32.0717L44.039 32.0775C44.0253 32.0798 44.0116 32.0817 43.9979 32.0833H20.6271ZM32.3125 14.5833C33.8706 14.5833 35.365 13.9688 36.4668 12.8748C37.5685 11.7808 38.1875 10.2971 38.1875 8.75C38.1875 7.2029 37.5685 5.71917 36.4668 4.62521C35.365 3.53125 33.8706 2.91667 32.3125 2.91667C30.7544 2.91667 29.26 3.53125 28.1582 4.62521C27.0565 5.71917 26.4375 7.2029 26.4375 8.75C26.4375 10.2971 27.0565 11.7808 28.1582 12.8748C29.26 13.9688 30.7544 14.5833 32.3125 14.5833ZM41.125 8.75C41.125 9.89907 40.8971 11.0369 40.4542 12.0985C40.0113 13.1601 39.3622 14.1247 38.5439 14.9372C37.7256 15.7497 36.7541 16.3942 35.6849 16.8339C34.6157 17.2737 33.4698 17.5 32.3125 17.5C31.1552 17.5 30.0093 17.2737 28.9401 16.8339C27.8709 16.3942 26.8994 15.7497 26.0811 14.9372C25.2628 14.1247 24.6137 13.1601 24.1708 12.0985C23.7279 11.0369 23.5 9.89907 23.5 8.75C23.5 6.42936 24.4285 4.20376 26.0811 2.56282C27.7338 0.921872 29.9753 0 32.3125 0C34.6497 0 36.8912 0.921872 38.5439 2.56282C40.1965 4.20376 41.125 6.42936 41.125 8.75ZM20.3745 21.2333C19.1994 20.8659 17.9882 20.6244 16.7614 20.5129C16.072 20.4478 15.3799 20.4157 14.6875 20.4167C2.9375 20.4167 0 29.1667 0 32.0833C0 34.0288 0.978188 35 2.9375 35H15.322C14.8865 34.0895 14.6694 33.0912 14.6875 32.0833C14.6875 29.1375 15.7949 26.1275 17.8894 23.6133C18.6032 22.7558 19.4345 21.9538 20.3745 21.2333ZM14.4525 23.3333C12.714 25.927 11.7748 28.9678 11.75 32.0833H2.9375C2.9375 31.325 3.41925 29.0792 5.17 27.055C6.77094 25.2 9.55275 23.3917 14.4525 23.3363V23.3333ZM4.40625 10.2083C4.40625 7.88769 5.33471 5.66209 6.98737 4.02115C8.64004 2.38021 10.8815 1.45833 13.2188 1.45833C15.556 1.45833 17.7975 2.38021 19.4501 4.02115C21.1028 5.66209 22.0312 7.88769 22.0312 10.2083C22.0312 12.529 21.1028 14.7546 19.4501 16.3955C17.7975 18.0365 15.556 18.9583 13.2188 18.9583C10.8815 18.9583 8.64004 18.0365 6.98737 16.3955C5.33471 14.7546 4.40625 12.529 4.40625 10.2083ZM13.2188 4.375C11.6606 4.375 10.1663 4.98958 9.0645 6.08354C7.96272 7.17751 7.34375 8.66124 7.34375 10.2083C7.34375 11.7554 7.96272 13.2392 9.0645 14.3331C10.1663 15.4271 11.6606 16.0417 13.2188 16.0417C14.7769 16.0417 16.2712 15.4271 17.373 14.3331C18.4748 13.2392 19.0937 11.7554 19.0938 10.2083C19.0937 8.66124 18.4748 7.17751 17.373 6.08354C16.2712 4.98958 14.7769 4.375 13.2188 4.375Z" fill="black"/>
            </svg>
        )
    }
}
export function Location({selected}){
    if(selected === true){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" viewBox="0 0 30 36" fill="none">
                <path d="M17.89 34.8651C22.2475 30.9163 30 22.8487 30 15.4453C30 11.3489 28.4196 7.42036 25.6066 4.52381C22.7936 1.62726 18.9782 0 15 0C11.0218 0 7.20644 1.62726 4.3934 4.52381C1.58035 7.42036 5.92805e-08 11.3489 0 15.4453C0 22.8487 7.75 30.9163 12.11 34.8651C12.9053 35.596 13.934 36 15 36C16.066 36 17.0947 35.596 17.89 34.8651ZM10 15.4453C10 14.0798 10.5268 12.7703 11.4645 11.8048C12.4021 10.8393 13.6739 10.2968 15 10.2968C16.3261 10.2968 17.5979 10.8393 18.5355 11.8048C19.4732 12.7703 20 14.0798 20 15.4453C20 16.8107 19.4732 18.1202 18.5355 19.0857C17.5979 20.0513 16.3261 20.5937 15 20.5937C13.6739 20.5937 12.4021 20.0513 11.4645 19.0857C10.5268 18.1202 10 16.8107 10 15.4453Z" fill="black"/>
            </svg>
        )
    }
    else{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="37" viewBox="0 0 32 37" fill="none">
                <path d="M16 0C20.2435 0 24.3131 1.67066 27.3137 4.64445C30.3143 7.61824 32 11.6516 32 15.8571C32 22.422 26.9511 29.3005 17.0667 36.6476C16.7589 36.8764 16.3847 37 16 37C15.6153 37 15.2411 36.8764 14.9333 36.6476C5.04889 29.3005 0 22.422 0 15.8571C0 11.6516 1.68571 7.61824 4.68629 4.64445C7.68687 1.67066 11.7565 0 16 0ZM16 3.52381C12.6995 3.52381 9.53423 4.82321 7.20045 7.13616C4.86666 9.44911 3.55556 12.5861 3.55556 15.8571C3.55556 20.6319 7.32089 26.1396 15.0187 32.2534L16 33.0216L16.9813 32.2534C24.6791 26.1396 28.4444 20.6319 28.4444 15.8571C28.4444 12.5861 27.1333 9.44911 24.7996 7.13616C22.4658 4.82321 19.3005 3.52381 16 3.52381ZM16 12.3333C16.943 12.3333 17.8474 12.7046 18.5142 13.3654C19.181 14.0263 19.5556 14.9226 19.5556 15.8571C19.5556 16.7917 19.181 17.688 18.5142 18.3489C17.8474 19.0097 16.943 19.381 16 19.381C15.057 19.381 14.1526 19.0097 13.4858 18.3489C12.819 17.688 12.4444 16.7917 12.4444 15.8571C12.4444 14.9226 12.819 14.0263 13.4858 13.3654C14.1526 12.7046 15.057 12.3333 16 12.3333Z" fill="black"/>
            </svg>
        )
    }
}