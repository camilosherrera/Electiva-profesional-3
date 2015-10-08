$(document).ready(function () {
    var i = 0;
    for (i = 0; i < localStorage.length; i++) {
        var id = "task-" + i;
        $('#lista').append("<li id='" + id + "'>" + localStorage.getItem(id) + "</li>");
    }

    $('#formato').submit(function () {
        if ($('#tarea').val() !== "") {
            var id = "task-" + i;
            var mensaje = $('#tarea').val();
            localStorage.setItem(id, mensaje);
            $('#lista').append("<li class='task' id='" + id + "'>" + mensaje + "</li>");
            var task = $('#' + id );
            task.css('display', 'none');
            task.slideDown();
            $('#tarea').val("");
            i++;
        }
        return false;
    });


    $('#lista').on("click", "li", function (event) {
        self = $(this);
        id = self.attr('id');
        localStorage.removeItem(id);
        self.slideUp('slow', function () {
            self.remove();
        });

    });

});

