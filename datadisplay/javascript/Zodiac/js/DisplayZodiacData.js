/**
 * @fileoverview
 * Display information about Zodiac signs from an RDFQuery
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
 * Display zodiac data from RDF Databank
 * 
 * @param databank      XML datra presented as a jQuery object
 * @param callback      callback function invoked when the data has been 
 *                      displayed.
 */
DisplayZodiacData = function (databank, callback)
{
    log.debug("DisplayZodiacData");

    zs = databank.where('?z rdf:type zodiac:Sign');

    zs.each(function ()
    {
        // this -> zs type triple 

        // Extract name
        var name = "unknown"
        
        // Extract description
        var desc = "unknown"

        // Construct table row
        var newrow = jQuery("<tr><td>"+name+"<td>"+desc+"</td>"+  +"</td></tr>");
        jQuery("#ZodiacTable").append(newrow);


    //        if (this.p.vae.toString()=="http://purl.org/dc/terms/isVersionOf")
    //        {
    //            jQuery("#derivedFrom > a").text(this.o.value.toString());
    //            jQuery("#derivedFrom > a").attr("href", this.o.value.toString());
    //        } 
    //        
    //        else if (this.p.value.toString()=="http://purl.org/dc/terms/title")
    //        {
    //            jQuery("#title").text(this.o.value.toString());
    //        }
    //        
    //        else if (this.p.value.toString()=="http://purl.org/dc/terms/description")
    //        {
    //            jQuery("#description").text(this.o.value.toString());
    //        }
    //        
    //        else if (this.p.value.toString()=="http://purl.org/dc/terms/modified")
    //        {
    //            baseUri = this.s.value.toString();
    //            subdate = this.o.value.match(/\d\d\d\d-\d\d-\d\d/)[0];
    //            jQuery("#lastModified").text(subdate);
    //        }
    //        else if (this.p.value.toString()=="http://www.openarchives.org/ore/terms/aggregates")
    //        {
    //            fileAbsolutePaths.push(this.o.value.toString());
    //            fileRelativePaths.push(jQuery.uri.relative(this.o.value, this.s.value).toString());
    //        }

    });


};

// End.
