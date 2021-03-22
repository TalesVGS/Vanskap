package br.com.lojabackend.core.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping("/images")
public class ImageController {
    String folder = "D:/workspace/loja/back-end/src/main/resources/static/images/";
    @PostMapping
    public ResponseEntity<?> uploadImage(
            @RequestParam("file") MultipartFile file
            ) {

        if(file.isEmpty()) {
            throw new RuntimeException("File given is not valid!");
        }

        String paths;
        try {
            Path pathFolder = Paths.get(folder);
            Files.createDirectories(pathFolder);
            Date date = new Date();
            paths = date.getTime() + "-" + file.getOriginalFilename();
            Path pathFile = Paths.get(folder + paths);
            Files.write(pathFile, file.getBytes());
          
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return new ResponseEntity<>(paths, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{imagename:.+}")
    public ResponseEntity<?> deleteImage(
        @PathVariable String imagename
    ) {
        Path path = Paths.get(folder + imagename);
        try {
            Files.deleteIfExists(path);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return new ResponseEntity<>(true, HttpStatus.OK);   
    }
        
}
