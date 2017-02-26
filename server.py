import SimpleHTTPServer
import SocketServer


class RequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_POST(self):
        print "POST %s" % self.path


def run(handler_class=RequestHandler, port=8000):
    httpd = SocketServer.TCPServer(("", port), handler_class)
    print "Serving on port %d" % port
    httpd.serve_forever()

run()