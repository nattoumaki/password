document.addEventListener("DOMContentLoaded", () => {
    // formのsubmit時の動作を定義する
    document.getElementById("input-form").onsubmit = () => {
        const display = document.getElementById("display");
        const num = document.getElementById("num").checked;
        const small = document.getElementById("small").checked;
        const big = document.getElementById("big").checked;
        const ee = document.getElementById("ee").value;
        const pas = generatePassword(num, big, small, ee);

        display.textContent = pas;
        return false;
    };
});

function generatePassword(num, al_big, al_small, t) {
    word = "";
    for(var i = 0; i < t; i++) {
        word += generatePasswordSub(num, al_big, al_small);
    }
    return word;
}

function generatePasswordSub(num, al_big, al_small) {
    const numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const alBigList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const alSmaList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // const signList = ['#', '!', '$', '%', '*', '?', '@'];

    // 全部リスト
    if(num && al_big && al_small) {
        var allList = alBigList.concat(alSmaList)
        allList = numList.concat(allList)
        return randomSelect(allList);
    }
    // 数字と大文字リスト
    else if(num && al_big) {
        return randomSelect(numList.concat(alBigList));
    }
    // 数字と小文字リスト
    else if(num && al_small) {
        return randomSelect(numList.concat(alSmaList));
    }
    // 大文字と小文字リスト
    else if(al_big && al_small) {
        return randomSelect(alBigList.concat(alSmaList));
    }
    // 数字リスト
    else if(num) {
        return randomSelect(numList);
    }
    // 大文字リスト
    else if(al_big) {
        return randomSelect(alBigList);
    }
    // 小文字リスト
    else if(al_small) {
        return randomSelect(alSmaList);
    }
}

// listから1個取り出す
function randomSelect(list) {
    const n = 0
    const m = list.length - 1;
    return list[rangeRandom(n, m)];
}

// n以上m以下の範囲で乱数生成
function rangeRandom(n, m) {
    return n + Math.floor(Math.random() * (m - n + 1));
}
