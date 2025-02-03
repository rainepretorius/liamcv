function load_checkmarks(ev) {
    if (localStorage.getItem('grade-7') == 'true') {
        var grade7 = document.getElementById('grade-7');
        grade7.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        grade7.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" style="color:white !important;" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('grade-8') == 'true') {
        var grade8 = document.getElementById('grade-8');
        grade8.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        grade8.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" style="color:white !important;" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('grade-9') == 'true') {
        var grade9 = document.getElementById('grade-9');
        grade9.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        grade9.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" style="color:white !important;" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('grade-10') == 'true') {
        var grade10 = document.getElementById('grade-10');
        grade10.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        grade10.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" style="color:white !important;" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('grade-11') == 'true') {
        var grade11 = document.getElementById('grade-11');
        grade11.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        grade11.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" style="color:white !important;" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('grade-12') == 'true') {
        var grade12 = document.getElementById('grade-12');
        grade12.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;";
        grade12.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" style="color:white !important;" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('up-student') == 'true') {
        var up = document.getElementById('up-student');
        up.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;";
        up.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('python') == 'true') {
        var python = document.getElementById('python');
        python.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;";
        python.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('sql') == 'true') {
        var sql = document.getElementById('sql');
        sql.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        sql.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('web-development') == 'true') {
        var webdev = document.getElementById('web-development');
        webdev.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        webdev.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('excel-macros') == 'true') {
        var excelmacros = document.getElementById('excel-macros');
        excelmacros.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        excelmacros.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('excel-visualization') == 'true') {
        var excelviz = document.getElementById('excel-visualization');
        excelviz.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        excelviz.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('java') == 'true') {
        var java = document.getElementById('java');
        java.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        java.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('first-aid-level-1') == 'true') {
        var firstaidlvlone = document.getElementById('fisrt-aid-level-1');
        firstaidlvlone.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        firstaidlvlone.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('rysis') == 'true') {
        var rysis = document.getElementById('rysis');
        rysis.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        rysis.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('mosaiek') == 'true') {
        var mosaiek = document.getElementById('rysis');
        mosaiek.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        mosaiek.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('sebrus') == 'true') {
        var sebrus = document.getElementById('sebrus');
        sebrus.style = "background-color: var(--global_main_color); !important; color: whitesmoke !important;"
        sebrus.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }
}

document.addEventListener('DOMContentLoaded', load_checkmarks);
setInterval(load_checkmarks, 5000);