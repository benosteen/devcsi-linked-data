/**
 * @fileoverview
 * Read information from an RDF file and return as an RDFQuery
 * RDF Databank object
 *  
 * @author
 * @version $Id: $
 * 
 * Coypyright (C) 2010, University of Oxford
 *
 * Licensed under the MIT License.  You may obtain a copy of the License at:
 *
 *     http://www.opensource.org/licenses/mit-license.php
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *  Add logging functions to global namespace, for convenience
 */
if (typeof log == "undefined")
{
    log = {};
    log.debug = MochiKit.Logging.logDebug   ;
    log.info  = MochiKit.Logging.log    ;
    log.warn  = MochiKit.Logging.logWarning ;
    log.error = MochiKit.Logging.logError   ;
};

/**
 * Get string value for object attributes
 */
objectString = function (obj) 
{
  if (typeof(obj) != "object")
  {
    return ""+obj;
  };
    var str = "";
    var pre = "";
    for ( var k in obj ) {
        if ( typeof obj[k] == "string" ) {
            str += pre + k + ': "' + obj[k] + '"';
            pre = ', ';
        } else if (obj[k] instanceof Array) {
            str += pre + k + ': [' + mk.map(objectString, obj[k]).join() + ']';
        } else if ( typeof obj[k] != "function" ) {
            //log.debug("  - "+k+": "+obj[k]);
            str += pre + k + ': ' + obj[k];
            pre = ', ';
        }
    };
    return "{ "+str+" };";
};

/**
 * Load XML data into an RDFQuery Databank
 * 
 * @param data          XML datra presented as a jQuery object
 * @param callback      callback function invoked when the file has been
 *                      loaded into an RDF databank, with the created databank
 *                      object passed as its argument.
 */
createDatabank = function (data, callback)
{
    log.debug("createDatabank");

    // Create RDFquery databank and load data
    try
    {
        var databank = jQuery.rdf.databank();
        databank.load(data);
        callback(jQuery.rdf({databank: databank}));
    } 
    catch(e)
    {
        log.error("Load databank failed "+objectString(e));
    }
};

/**
 * Read an RDF data file, returning an RDF databank
 * 
 * @param filePath      String containing the URI path of the file to read
 * @param callback      callback function invoked when the file has been
 *                      read and loaded intio an RDF databank.
 */
ReadRDFData = function (filePath, callback)
{
    log.debug("ReadRDFData "+filePath);
    filePath = jQuery.uri("").resolve(filePath).toString();
    log.debug("ReadRDFData "+filePath);

    // Read file
    jQuery.ajax({
        type:         "GET",
        url:          filePath,
        dataType:     "xml",
        beforeSend:   function (xhr)
            {
                xhr.setRequestHeader("Accept", "application/RDF+XML");
            },
        success:      function (data, status, xhr)
            {
                createDatabank(data, callback);
            },
        error:        function (xhr, status) 
            { 
                //log.error("Read file failed "+filePath+", "+status);
                log.error("HTTP GET "+filePath+" failed: "+status+"; HTTP status: "+xhr.status+" "+xhr.statusText);
            },
        cache:        false
    });
};

// End.
