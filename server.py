import SimpleHTTPServer
import SocketServer
import cgi
import urlparse

class RegisterHandler:
    def handle(self, handler, data):
        print(data)
        handler.send_response(200)


handlerMap = {"/php/register.php": RegisterHandler}


class RequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_GET(self):
        file_type = self.path[self.path.rfind('.'):]
        if file_type == ".html":
            return SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)
        else:
            self.path += ".html"
            return SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        print "<START> POST %s" % self.path
        file_type = self.path[self.path.rfind('.'):]
        if file_type == ".php":
            ctype, pdict = cgi.parse_header(self.headers.getheader("content-type"))
            print(ctype)
            if ctype == "application/x-www-form-urlencoded":
                length = int(self.headers.getheader("content-length"))
                postvars = urlparse.parse_qs(self.rfile.read(length), keep_blank_values=1)
                handler = handlerMap[self.path]
                if not handler:
                    self.send_response(405)
                else:
                    handler = handler()
                    handler.handle(self, postvars)
            else:
                self.send_response(405)
        else:
            self.send_response(405)


def run(handler_class=RequestHandler, port=8000):
    httpd = SocketServer.TCPServer(("", port), handler_class)
    print "Serving on port %d" % port
    httpd.serve_forever()


run()
