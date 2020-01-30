const flags = {
    'zone-1': false,
    'zone-2': false,
    'zone-3': false,
    'zone-4': false,
};

const congrats = function () {
    for (const key in flags)
        if (!flags[key])
            return;

    console.log('Congratulations!!!');
};

const greenOn = function () {
    $(this).addClass('green');
};

const greenOff = function () {
    $(this).removeClass('green');
};

const greenOnClick = function () {
    const currentKey = this.id;

    if (!flags[currentKey]) {
        $(this).addClass('green');
        $(this).off('mouseleave');
        flags[currentKey] = true;
        congrats();

    } else {
        $(this).removeClass('green');
        $(this).mouseleave(greenOff);
        flags[currentKey] = false;
    }
};

for (const key in flags) {
    $(`#${key}`)
        .mouseenter(greenOn)
        .mouseleave(greenOff)
        .click(greenOnClick);
}