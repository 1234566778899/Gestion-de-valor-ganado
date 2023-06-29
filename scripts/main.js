function openBoxEV(param) {
    if (param) {
        $('.box-ev').css('display', 'block');
    } else {
        $('.box-ev').css('display', 'none');
    }
}

function calcularEV() {
    let porcentaje = parseFloat(document.querySelector('#porcentaje').value);
    let pv_total = parseFloat(document.querySelector('#pv-total').value);
    $('#ev-entrada').val(porcentaje * pv_total / 100);
    calcular();
    $('.box-ev').css('display', 'none');
}

function calcular() {
    let pv_entrada = parseFloat(document.querySelector('#pv-entrada').value);
    let ev_entrada = parseFloat(document.querySelector('#ev-entrada').value);
    let ac_entrada = parseFloat(document.querySelector('#ac-entrada').value);
    let bac_entrada = parseFloat(document.querySelector('#bac-entrada').value);
    let eac_entrada = parseFloat(document.querySelector('#eac-entrada').value);

    if (ev_entrada && pv_entrada) {
        $('#sv-result').html(`= ${(ev_entrada - pv_entrada).toFixed(2)}`);
        $('#spi-result').html(`= ${(ev_entrada / pv_entrada).toFixed(2)}`);

    }
    if (ev_entrada && ac_entrada) {
        $('#cv-result').html(`= ${(ev_entrada - ac_entrada).toFixed(2)}`);
        $('#cpi-result').html(`= ${(ev_entrada / ac_entrada).toFixed(2)}`);
    }

    if (eac_entrada && ac_entrada) {
        $('#etc-result').html(`= ${(eac_entrada - ac_entrada).toFixed(2)}`);
    }
    if (bac_entrada && eac_entrada) {
        $('#vac-result').html(`= ${(bac_entrada - eac_entrada).toFixed(2)}`);
    }
    if (bac_entrada && ev_entrada && ac_entrada) {
        $('#tcpi-result').html(`= ${((bac_entrada - ev_entrada) / (bac_entrada - ac_entrada)).toFixed(2)}`);
    }
}