import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { CKFinderUploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder'; // 업로드 어댑터(무료, 직접 구현시)
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';

// 추가 플러그인
import { Font } from '@ckeditor/ckeditor5-font';
import { Underline, Strikethrough, Code, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { LinkImage } from '@ckeditor/ckeditor5-link';
import { ImageResize } from '@ckeditor/ckeditor5-image';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';

export default class ClassicEditor extends ClassicEditorBase {
    public static override builtinPlugins = [
        Essentials,
        CKFinderUploadAdapter,  // (서버쪽이 무료라면 가능, CKFinder 서버가 유료라면 SimpleUploadAdapter만 남기는 게 더 완전 무료)
        Autoformat,
        Font,
        Bold,
        Italic,
        Underline,
        Strikethrough,
        Code,
        Subscript,
        Superscript,
        Alignment,
        BlockQuote,
        Heading,
        Image,
        ImageCaption,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        ImageResize,
        Indent,
        Link,
        LinkImage,
        List,
        MediaEmbed,
        Paragraph,
        PasteFromOffice,
        PictureEditing,
        Table,
        TableToolbar,
        TextTransformation,
        CodeBlock,
        HorizontalLine,
        SimpleUploadAdapter, // ★ 직접 서버 업로드시 이것만 있어도 충분
        FindAndReplace
    ];

    public static override defaultConfig = {
        toolbar: {
            items: [
                'heading',
                '|',
                'fontFamily',
                'fontSize',
                'fontColor',
                'fontBackgroundColor',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'subscript',
                'superscript',
                'code',
                '|',
                'alignment',
                '|',
                'bulletedList',
                'numberedList',
                '|',
                'indent',
                'outdent',
                '|',
                'horizontalLine',
                'codeBlock',
                'blockQuote',
                'insertTable',
                '|',
                'link',
                'uploadImage',
                'mediaEmbed',
                '|',
                'undo',
                'redo',
                'findAndReplace'
            ],
            shouldNotGroupWhenFull: true
        },
        image: {
            styles: {
                options: [
                    'alignLeft', 'alignCenter', 'alignRight'
                ]
            },
            resizeOptions: [
                {
                    name: 'resizeImage:original',
                    label: 'Original',
                    value: null
                },
                {
                    name: 'resizeImage:75',
                    label: '75%',
                    value: '75'
                },
                {
                    name: 'resizeImage:50',
                    label: '50%',
                    value: '50'
                },
                {
                    name: 'resizeImage:25',
                    label: '25%',
                    value: '25'
                }
            ],
            toolbar: [
                'resizeImage',
                '|',
                'imageStyle:alignLeft',
                'imageStyle:alignCenter',
                'imageStyle:alignRight',
                '|',
                'linkImage',
                '|',
                'imageTextAlternative'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },
        language: 'ko'
    };
}
