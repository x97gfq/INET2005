<!DOCTYPE html>
<html>
    <body>
        
        <?php
        $i = 0;
       
        echo "<p>";

        switch ($i) {
            case 0:
                echo "i equals 0";
                break;
            case 1:
                echo "i equals 1";
                break;
            case 2:
                echo "i equals 2";
                break;
        }

        echo "</p>";
        echo "<p>";

        if ($i == 0) {
            echo "i equals 0";
        } elseif ($i == 1) {
            echo "i equals 1";
        } elseif ($i == 2) {
            echo "i equals 2";
        }
        echo "<p>";

        ?>
    </body>
</html>