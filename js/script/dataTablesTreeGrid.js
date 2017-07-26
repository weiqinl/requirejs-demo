require(['config'], function() {
    require(['jquery', 'datatables.net', 'lib/dataTables.treeGrid'], function($) {
        $(console.log('加载中...'));
        $(document).ready(function() {

        	var columns = [
                {
                    title: '',
                    target: 0,
                    className: 'treegrid-control',
                    data: function (item) {
                        if (item.children) {
                            return '<span>+<\/span>';
                        }
                        return '';
                    }
                },
                {
                    title: 'Name',
                    target: 1,
                    data: function (item) {
                        return item.name;
                    }
                },
                {
                    title: 'Position',
                    target: 2,
                    data: function (item) {
                        return item.position;
                    }
                },
                {
                    title: 'Office',
                    target: 3,
                    data: function (item) {
                        return item.office;
                    }
                },
                {
                    title: 'Extn.',
                    target: 4,
                    data: function (item) {
                        return item.extn;
                    }
                },
                {
                    title: 'Start date',
                    target: 5,
                    data: function (item) {
                        return item.start;
                    }
                },
                {
                    title: 'Salary',
                    target: 6,
                    data: function (item) {
                        return item.salary;
                    }
                }
            ];
            $('#example1').DataTable({
                'columns': columns,
                'ajax': 'js/script/arrays.txt',
                'treeGrid': {
                    'left': 10,
                    'expandIcon': '<span>+<\/span>',
                    'collapseIcon': '<span>-<\/span>'
                }
            });
            // $('#exampleWithSelect').DataTable({
            //     'select': {
            //         'style': 'multi',
            //         'selector': 'td:not(:first-child)'
            //     },
            //     'columns': columns,
            //     'ajax': './arrays.txt',
            //     'treeGrid': {
            //         'left': 10,
            //         'expandIcon': '<span>+<\/span>',
            //         'collapseIcon': '<span>-<\/span>'
            //     }
            // });
            // $('h4').on('click', function() {
            //     var h4 = $(this);
            //     if (h4.hasClass('show')) {
            //         h4.removeClass('show').addClass('showed').html('-hide code');
            //         h4.next().removeClass('hide');
            //     } else {
            //         h4.removeClass('showed').addClass('show').html('+show code');
            //         h4.next().addClass('hide');
            //     }
            // });
        });
    })
})