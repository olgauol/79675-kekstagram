function getMessage(a, b)
{
    var typeOfA = typeof a;
    var typeOfB = typeof b;

    if (typeOfA == "boolean")
    {
        return ("Переданное GIF-изображение анимировано и содержит " + b + " кадров");
    }
     else
    {
        return ("Переданное GIF-изображение не анимировано");
    }

    if (typeOfA == "number") 
    {
        return ("Переданное SVG-изображение содержит " + a + " объектов и " + (b * 4) + " атрибутов");
    }

    if (Array.isArray(a))
    { 
        return ("Количество красных точек во всех строчках изображения: " + 
            function sumA(a)
            {
                for (var i = 0; i < a.value; i++)
                {
                    a += a;
                }
            }
            )
    }
    if (Array.isArray(a) && Array.isArray(b))
    {
        return ("Общая площадь артефактов сжатия: " + 
            function squareAB(a, b)
            {
                for (var i = 0; i < (a * b); (a * b)++)
                {
                    a * b;
                }
            }

         + " пикселей")
    }

}
