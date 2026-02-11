npx @nestjs/cli generate service [path] --flat

request -> controller -> service -> repo -> BD
          |                             |
          +--------------+--------------+
                         |
                         V
                       Module