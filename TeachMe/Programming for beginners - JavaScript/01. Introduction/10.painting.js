function painting(yellowPaint) {
    let redPaint = yellowPaint / 4;
    let whitePaint = yellowPaint * 2;

    let total = yellowPaint + redPaint + whitePaint;

    console.log(`Red: ${redPaint}\nYellow: ${yellowPaint}\nWhite: ${whitePaint}\nTotal: ${total}`);
}

painting(10);
painting(42);