
export const Image = () => {

    var _URL = window.URL || window.webkitURL;
    var base64 = '';

    function dataURLtoBlob(dataURL) {
        let array, binary, i, len;
        binary = atob(dataURL.split(',')[1]);
        array = [];
        i = 0;
        len = binary.length;
        while (i < len) {
            array.push(binary.charCodeAt(i));
            i++;
        }
        return new Blob([new Uint8Array(array)], {
            type: 'image/png'
        });
    };
    const onChange = function (e) {


        let file, img;
        if ((file = e.target.files[0])) {
            if (file.size > 2097152) {
                alert("File is too big!");
                e.target.value = "";
                return;
            };
            img = new window.Image();
            img.onload = function () {
                let canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                base64 = canvas.toDataURL();
                document.querySelector('#image').src = _URL.createObjectURL(dataURLtoBlob(base64));

            };
            img.onerror = function () {
                alert("not a valid file: " + file.type);
            };
            img.src = _URL.createObjectURL(file);

        }
    }
    return (
        <div>
            <input type='file' onChange={onChange} />
            <img id="image" />
        </div>
    )
}